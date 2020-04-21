<?php

namespace App\Http\Controllers\Api\Recommendations;

use App\Category;
use App\Http\Controllers\Controller;
use App\Offer;
use App\Http\ProductSimilarity;
use App\Student;
use App\StudentOffer;
class RecommendationController extends Controller
{
    public function index($id)
    {
        $student_offers = StudentOffer::where('sid',$id)->get()->toArray();

        if(empty($student_offers)){
            return 'No Previously Purchased Offers Found';
        }
        
        foreach ($student_offers as $student_offer){
            $offers[] = Offer::where('offerid',$student_offer['offerid'])->get()->toArray();
        }

        foreach ($offers as $offer ) {
            $categories[] = Category::where('catid',$offer[0]['catid'])->get()->pluck('categoryname','catid')->toArray();
        }

        foreach ($offers as $offer ) {
            $offer[0]['category'] = implode($this->getCategory($offer,$categories));
            $selectedOffers[] = (object)$offer[0];
        }

        $allOffers = Offer::all();

        $allUsers = Student::all()->pluck('sid','email')->toArray();
        foreach($allOffers as $offer){
            $currentOffer = StudentOffer::where('offerid',$offer->offerid)->get()->pluck('sid')->toArray();
            foreach($allUsers as $key=>$user){
                if(in_array($user,$currentOffer))
                $users[$key] = 1;
                else
                $users[$key] = 0;
            }
            $recommended_offers[] = (object)[
                'offerid' => $offer->offerid,
                'offertitle' => $offer->offertitle,
                'description' => $offer->offerdescription,
                'category' => $offer->category,
                'users' => (object)$users,
            ];
        }

        $selectedId = $student_offer[0]['offerid'];
        $productSimilarity = new ProductSimilarity($recommended_offers);
        $similarityMatrix  = $productSimilarity->calculateSimilarityMatrix();
        $recommendedOffers[] = $productSimilarity->getProductsSortedBySimularity($selectedId, $similarityMatrix);

        return $recommendedOffers;
    }


    public function offer($id)
    {       
        $selected_offer = Offer::where('offerid',$id)->get()->toArray();
        $category = Category::where('catid',$selected_offer[0]['catid'])->get()->pluck('categoryname')->toArray();
        $offer[0]['category'] = $category[0];
        $selectedOffers = (object)$offer[0];
        
        $allOffers = Offer::all();

        $allUsers = Student::all()->pluck('sid','email')->toArray();
        
        foreach($allOffers as $offer){
            $currentOffer = StudentOffer::where('offerid',$offer->offerid)->get()->pluck('sid')->toArray();
            foreach($allUsers as $key=>$user){
                if(in_array($user,$currentOffer))
                $users[$key] = 1;
                else
                $users[$key] = 0;
            }
            $recommended_offers[] = (object)[
                'offerid' => $offer->offerid,
                'offertitle' => $offer->offertitle,
                'description' => $offer->offerdescription,
                'category' => $offer->category,
                'users' => (object)$users,
            ];
        }

        $selectedId = $selected_offer[0]['offerid'];
        $productSimilarity = new ProductSimilarity($recommended_offers);
        $similarityMatrix  = $productSimilarity->calculateSimilarityMatrix();
        $recommendedOffers = $productSimilarity->getProductsSortedBySimularity($selectedId, $similarityMatrix);

        return $recommendedOffers;
    }
    
    public function getCategory($offer, $categories)
    {
        foreach ($categories as $key => $category) {
            if($offer[0]['catid'] == $key)
            return $category;
        }
        return [];
    }
}
