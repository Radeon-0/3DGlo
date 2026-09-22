const validForm = () => {

    const inputCalc = document.querySelectorAll("#calc input");
    const inputsForm = document.querySelectorAll('form input');

    inputCalc.forEach(input => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/g, "");
        });
    });



    inputsForm.forEach(input => {

        input.addEventListener('input', (e) => {
            if (input.type === 'text' || input.placeholder === 'Ваше сообщение') {
                e.target.value = e.target.value.replace(/[^а-я\s-]/gi, '');
            }

            if (input.type === 'email') {
                e.target.value = e.target.value.replace(/[^a-z0-9@\-_.!~*']/gi, '');
            }

            if (input.type === 'tel') {
                e.target.value = e.target.value.replace(/[^0-9()\-]/g, '');
            }

        });

    });


}
export default validForm