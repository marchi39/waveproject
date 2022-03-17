<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\lead;
use App\Models\lead_two;
use App\Http\Requests\StoreLeadRequest;

class LeadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return lead::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreLeadRequest $request)
    {
        $leadExistes = lead::where('phone', $request->phone)->first();
        if ($leadExistes) {
            lead_two::create($request->all());
            return response()->json(['message' => 'תודה, הפרטים שלך התקבלו שוב.'], 201);
        }
        if (!$leadExistes) {
            lead::create($request->all());
            return response()->json(['message' => 'תודה, הפרטים התקבלו בהצלחה.'], 201);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
