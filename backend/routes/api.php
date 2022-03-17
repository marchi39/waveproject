<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\http\Controllers\ProductController;
use App\http\Controllers\LeadController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::resource('products',ProductController::class);

Route::post('/leads',[LeadController::class,'store']);
Route::get('/leads',[LeadController::class,'index']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
