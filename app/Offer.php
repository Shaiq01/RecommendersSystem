<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    protected $fillable = [
        'offertitle','offerdescription','vid'
    ];

    protected $primaryKey = 'offerid';
}
