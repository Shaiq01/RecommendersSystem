<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    protected $fillable = [
        'offertitle','offerdescription','vid'
    ];

    public function category()
    {
        return $this->hasOne('App\Category','catid','catid');
    }

    protected $primaryKey = 'offerid';
}
