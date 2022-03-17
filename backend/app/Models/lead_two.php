<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class lead_two extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'email', 'phone', 'product'];
    public const VALIDATION_RULES = [
        'name' => 'required',
        'email' => 'required',
        'product' => 'required',
        'phone' => 'required',
];
}
