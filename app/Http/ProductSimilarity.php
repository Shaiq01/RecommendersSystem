<?php declare(strict_types=1);

namespace App\Http;

use Exception;

class ProductSimilarity
{
    protected $products = [];
    protected $userWeight = 1;
    protected $categoryWeight = 1;
    protected $threshold = 0.4;

    public function __construct(array $products)
    {
        $this->products = $products;
    }

    public function setFeatureWeight(float $weight): void
    {
        $this->featureWeight = $weight;
    }

    public function setCategoryWeight(float $weight): void
    {
        $this->categoryWeight = $weight;
    }

    public function calculateSimilarityMatrix(): array
    {
        $matrix = [];

        foreach ($this->products as $product) {

            $similarityScores = [];

            foreach ($this->products as $_product) {
                if ($product->offertitle === $_product->offertitle) {
                    continue;
                }
                $similarityScores['product_id_' . $_product->offerid] = $this->calculateSimilarityScore($product, $_product);
            }
            $matrix['product_id_' . $product->offerid] = $similarityScores;
        }
        return $matrix;
    }

    public function getProductsSortedBySimularity(int $productId, array $matrix): array
    {
        $similarities   = $matrix['product_id_' . $productId] ?? null;
        $sortedProducts = [];

        if (is_null($similarities)) {
            throw new Exception('Can\'t find product with that ID.');
        }
        arsort($similarities);

        foreach ($similarities as $productIdKey => $similarity) {
            if($similarity < $this->threshold) continue;
            $id       = intval(str_replace('product_id_', '', $productIdKey));
            $products = array_filter($this->products, function ($product) use ($id) { return $product->offerid === $id; });
            if (! count($products)) {
                continue;
            }
            $product = $products[array_keys($products)[0]];
            $product->similarity = $similarity;
            $sortedProducts[] = $product;
        }
        return $sortedProducts;
    }

    protected function calculateSimilarityScore($productA, $productB)
    {
        $productAUsers = implode('', get_object_vars($productA->users));
        $productBUsers = implode('', get_object_vars($productB->users));

        return array_sum([
            (Similarity::hamming($productAUsers, $productBUsers) * $this->userWeight),
            (Similarity::jaccard($productA->category->categoryname, $productB->category->categoryname) * $this->categoryWeight)
        ]) / ($this->userWeight + $this->categoryWeight);
    }
}