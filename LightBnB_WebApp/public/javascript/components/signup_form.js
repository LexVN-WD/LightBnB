$(() => {

  const $signUpForm = $(`
  <form id="sign-up-form" class="sign-up-form">
        <p class="sign-up">Sign Up</p>

        <div class="sign-up-form__field-wrapper">
            <input type="text" name="name" placeholder="Username">
          </div>

        <div class="sign-up-form__field-wrapper">
          <input type="email" name="email" placeholder="Email">
        </div>
  
        <div class="sign-up-form__field-wrapper">
            <input type="password" name="password" placeholder="Password">
          </div>
  
        <div class="sign-up-form__field-wrapper">
            <button>Sign Up</button>
            <button class="cancel" id="login-form__cancel" href="#">Cancel</button>
        </div>
      </form>
  `);
  window.$signUpForm = $signUpForm;

  $signUpForm.on('submit', function(event) {
    event.preventDefault();

    const data = $(this).serialize();
    signUp(data)
      .then(getMyDetails)
      .then((json) => {
        header.update(json.user);
        views_manager.show('listings');
      });
  });

  $('body').on('click', '#sign-up-form__cancel', function() {
    views_manager.show('listings');
    return false;
  });
      
});