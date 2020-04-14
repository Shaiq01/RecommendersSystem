<?php

namespace App\Http\Controllers\Api\Student\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use JWTFactory;
use JWTAuth;
use JWTAuthException;
use App\Student;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Auth\VerifiesEmails;
use Illuminate\Auth\Access\AuthorizationException;

class LoginController extends Controller
{
    public function __construct()
    {
        $this->student = new Student;
        $this->middleware('auth:api')->only('resend');
        $this->middleware('signed')->only('verify');
        $this->middleware('throttle:6,1')->only('verify', 'resend');

    }
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password'=> 'required'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors());
        }
        config()->set( 'auth.defaults.guard', 'student' );
        \Config::set('jwt.user', 'App\Student'); 
		\Config::set('auth.providers.users.model', \App\Student::class);
		$credentials = $request->only('email', 'password');
		$token = null;
        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
                // user = JWTAuth::toUser($token);
//                 $user = Auth::user();
      return response()->json(compact('token'));
      
    }
        public function profile()
    {
                
        config()->set( 'auth.defaults.guard', 'student' );
        \Config::set('jwt.user', 'App\Student'); 
		\Config::set('auth.providers.users.model', \App\Student::class);
        try {
            if (! $user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['user_not_found'], 404);
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json(['token_expired'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['token_invalid'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(['token_absent'], $e->getStatusCode());
        }
        return response()->json(compact('user'));
    }
       /**
     * Resend the email verification notification.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function resend(Request $request)
    {
        config()->set( 'auth.defaults.guard', 'student' );
        \Config::set('jwt.user', 'App\Student'); 
        \Config::set('auth.providers.users.model', \App\Student::class);
        if ($user->hasVerifiedEmail()) {
            return response(['message'=>'Already verified']);
        }
        $user->sendEmailVerificationNotification();
        if ($request->wantsJson()) {
            return response(['message' => 'Email Sent']);
        }
        return back()->with('resent', true);
    
}
    /**
     * Mark the authenticated user's email address as verified.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function verify(Request $request)
    {
        config()->set( 'auth.defaults.guard', 'student' );
        \Config::set('jwt.user', 'App\Student');
		\Config::set('auth.providers.users.model', \App\Student::class);
        auth()->loginUsingId($request->route('id'));
        if ($request->route('id') != $request->user()->getKey()) {
            throw new AuthorizationException;
        }
        if ($request->user()->hasVerifiedEmail()) {
            return response(['message'=>'Already verified']);
            // return redirect($this->redirectPath());
        }
        if ($request->user()->markEmailAsVerified()) {
            event(new Verified($request->user()));
        }
        return response(['message'=>'Successfully verified']);
    }
}
