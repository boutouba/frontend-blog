

const Register = () => {
    return <div class="text-center">
            <main class="form-signin">
                 <form>
                   <h1 class="h3 mb-3 fw-normal">Please register</h1>

                   <div class="form-floating">
                     <input type="text" class="form-control" id="floatingInput" placeholder="name..."/>
                     <label for="floatingInput">Name</label>
                   </div>
                   <div class="form-floating">
                     <input type="email" class="form-control" id="floatingEmail" placeholder="Email"/>
                     <label for="floatingEmail">Email</label>
                   </div>
                   <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Password</label>
                  </div>
                   <button class="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                   <p class="mt-5 mb-3 text-muted">© 2017–2021</p>
                 </form>
            </main>
        </div>;
}

export default Register;