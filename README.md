# FV.js
Simple Form Validation Javascript

## Example
Form:
```
<form action="" method="post" id="form_register">
    <label for="name">Name</label><br/>
    <input type="text" name="name" value="" id="name"><br/>
    <label for="email">Email</label><br/>
    <input type="email" name="email" value="" id="email"><br/>
    <label for="password">Password</label><br/>
    <input type="password" name="password" value="" id="password"><br/>
    <input type="submit" name="" value="Register">
</form>
```
Javascript:
```
var fv = new FV('form_register');
fv.set('name', 'Name is required!');
fv.set('email', 'Email is required!');
fv.set('password', 'Password is required!');
```
