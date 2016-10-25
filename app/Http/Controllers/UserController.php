<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use DB;
use Response;
use App\Http\Requests\UserRequest;
use App\Models\IRepository\IUserRepository;
use App\Models\User;

class UserController extends Controller
{ 
    protected $userRepository;

    public function __construct(IUserRepository $userRepo)
    {
        $this->userRepository = $userRepo;
    }

    public function index()
    {   
        return json_encode($this->userRepository->selectAll());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserRequest $request)
    {
        $username = $request->input('username');
        $password = $request->input('password');
        $firstname = $request->input('firstname');
        $lastname = $request->input('lastname');
        try {
            DB::table('user')->insert([
                'username' => $username,
                'password' => $password,
                'firstname' => $firstname,
                'lastname' => $lastname
            ]);

            return Response::json(array('success' => true));
        } catch (\Exception $e) {
            return $e;
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
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
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
