setLoading(true);

// API CALL

fetch("http/www.fb.com")
.then(resp => {

    // resp
    setLoading(false);


    
})
.catch(err => {
    console.log(err);
    setLoading(false);
});

