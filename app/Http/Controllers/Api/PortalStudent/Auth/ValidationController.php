<?php

namespace App\Http\Controllers\Api\PortalStudent\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\PortalStudent;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use GuzzleHttp\Client;
//JWT
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Facades\JWTFactory;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Tymon\JWTAuth\PayloadFactory;
use Tymon\JWTAuth\JWTManager as JWT;

class ValidationController extends Controller
{
    public function CreateUser(Request $request)
    {
        $validator = Validator::make($request->json()->all() , [
            'portalid' => 'required|max:255',
            'password' => 'required|min:6',

        ]);
        if($validator->fails()){
                return response()->json($validator->errors()->toJson(), 400);
        }
        $user = PortalStudent::create([
            'portalid' => $request->json()->get('portalid'),
            'password' => Hash::make($request->json()->get('password')),
        ]);
        $s_rollnum = $request->portalid;
        $s_password = $request->password;
    $client = new Client();
    $res = $client->request('GET', 'https://uniapi.000webhostapp.com/api2/'.$s_rollnum, [ 
        ]);

    $data = $res->getStatusCode();
    echo($data);
    if($data===200){
            $user->update(['is_valid' => 1]);
    }
    else{
        return response()->json(['message'=>'user not found']);
    }


        $token = JWTAuth::fromUser($user);
        return response()->json(compact('user','token',),201);

    }
    public function studentdetails()
    {
        $client = new Client();
    $res = $client->request('GET', 'https://uniapi.000webhostapp.com/api/', [ 
        

        ]);
    $data = $res->getBody([]);
    echo($data);
}

    public function det(){
        return PortalStudent::all();
    }

}
