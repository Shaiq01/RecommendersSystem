<?php

namespace App\Http\Controllers\Api\Offer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Offer;

class OfferController extends Controller
{
    public function index()
    {
        return Offer::all();
    }
 
    public function show(Request $request,$vid)
    {
        $offer=Offer::select('offertitle','offerdescription')->where('vid', $vid)->get();
        return $offer;
    }
    public function store(Request $request)
    {
        return Offer::create($request->all());
    }
    public function update(Request $request, $id)
    {
        $offer = Offer::findOrFail($id);
        $offer->update($request->all());
        return $offer;
    }
    public function delete(Request $request, $id)
    {
        $offer = Offer::findOrFail($id);
        $offer->delete();
        return 204;
    }
}
