console.log('works')
const form = document.querySelector('.form')

form.addEventListener('click', function (event) {
	const changePage = confirm('You are going to my LinkedIn profile, are you sure you want to go there?')
	if (!changePage) {
		event.preventDefault()
	}
})

const signupForm = document.querySelector('[name="signup"]')


signupForm.addEventListener('submit', function (event) {
	const name = event.currentTarget.name.value
	if (name.toLowerCase().includes('mateo')) {
		alert('Sorry Mateo, you shall not pass this form!')
		event.preventDefault()
	}

})

