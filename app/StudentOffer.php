<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StudentOffer extends Model
{
    protected $table = 'studentoffer';
    // protected $fillable = [
    // 'categoryname'
    // ];
    public function student()
    {
        return $this->hasMany('App\Student','sid','sid');
    }

    protected $primaryKey = 'studoffid';
}
