$(document).ready(function() {
    $('.form-submit-btn').click(function(e){
        console.log("test");
        e.preventDefault();
        var delay = 2000;
        var getName = jQuery('#name').val();
        var getEmail = jQuery('#email').val();
        var getPhone = jQuery('#phone').val();
        var getCity = jQuery('#city').val();
        var getProduct = jQuery('#products').val();
        var getQuantity = jQuery('#quantity').val();
        var getMsg = jQuery('#message').val();

        // Name Validation
        if(getName == ''){
            $(this).closest('.needs-validation').find('.invalid-name').addClass('d-block');
            $(this).closest('.needs-validation').find('#name').focus();
            return false;
        }else{
            $(this).closest('.needs-validation').find('.invalid-name').removeClass('d-block');   
        }

        // Email Validation
        if(getEmail == ''){
            $(this).closest('.needs-validation').find('.invalid-email').addClass('d-block');
            $(this).closest('.needs-validation').find('#email').focus();
                return false;
        }
        if( $(this).closest('.needs-validation').find("#email").val()!='' ){
            if( !isValidEmailAddress( $(this).closest('.needs-validation').find("#email").val() ) ){
                $(this).closest('.needs-validation').find('.invalid-email').html('Provided email address is incorrect!');
                $(this).closest('.needs-validation').find('#email').focus();
                return false;
            }
            else{
                $(this).closest('.needs-validation').find('.invalid-email').removeClass('d-block');
            }
        }
        
        
        //Email Validation Function	
        function isValidEmailAddress(emailAddress) {
            var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
            return pattern.test(emailAddress);
        };

        

        // Company Validation
        if(getPhone == ''){
            $(this).closest('.needs-validation').find('.invalid-phone').addClass('d-block');
            $(this).closest('.needs-validation').find('#phone').focus();
            return false;
        }else{
            $(this).closest('.needs-validation').find('.invalid-phone').removeClass('d-block');   
        }

        if(getCity == ''){
            $(this).closest('.needs-validation').find('.invalid-city').addClass('d-block');
            $(this).closest('.needs-validation').find('#city').focus();
            return false;
        }else{
            $(this).closest('.needs-validation').find('.invalid-city').removeClass('d-block');   
        }

        // Company Validation
        // if(getProduct == ''){
        if( $("#products option:selected").val()=='0'){
            $(this).closest('.needs-validation').find('.invalid-products').addClass('d-block');
            $(this).closest('.needs-validation').find('#products').focus();
            return false;
        }else{
            $(this).closest('.needs-validation').find('.invalid-products').removeClass('d-block');   
        }

        // Company Validation
        if(getQuantity == ''){
            $(this).closest('.needs-validation').find('.invalid-quantity').addClass('d-block');
            $(this).closest('.needs-validation').find('#quantity').focus();
            return false;
        }else{
            $(this).closest('.needs-validation').find('.invalid-quantity').removeClass('d-block');   
        }

        // Message Validation
        if(getMsg == ''){
            $(this).closest('.needs-validation').find('.invalid-message').addClass('d-block');
            $(this).closest('.needs-validation').find('#message').focus();
            return false;
        }else{
            $(this).closest('.needs-validation').find('.invalid-message').removeClass('d-block');   
        }



        $.ajax({
            url:'form.php',
            data:{ name:getName, email:getEmail, city:getCity, message:getMsg, phone: getPhone, quantity: getQuantity, products: getProduct},
            type: 'POST',
            success: function(data){
                setTimeout(function() {
                    $('#emailSendResult').html(data);
                },delay);
                setTimeout(function() {
                    $('#emailSendResult').addClass("d-none");
                    $('form.contact-form').trigger("reset")
                },delay += 3000);
            }
        });
    });
});