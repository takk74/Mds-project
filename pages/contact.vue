<template>
   <div class="container">


        <form id="contact" action="" method="post">
            <h1>Nous contacter</h1>

            <input placeholder="Nom" type="text" required autofocus>


            <input placeholder="Prénom" type="text2" required autofocus>


            <input placeholder="Email" type="email" required>

            <textarea placeholder="Message" required></textarea>

            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Envoyez</button>
        </form>
    </div>

</template>

<script>
export default {
   name : "contact",

   data() {
     return {

     }
   }
}
</script>
<style lang="scss">


.container {
  padding: 0 80px;
  height: 651px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Rubik";
  background-color: $gris;

}


.container form h1 {
    font-weight: 500;
    color: #3C3C3B;
    text-align: center;
    padding: 20px;

}

#contact input:focus::-webkit-input-placeholder {
    opacity: 0;
}

#contact textarea:focus::-webkit-input-placeholder {
    opacity: 0;
}

#contact input[type="text"],
#contact input[type="text2"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact textarea,
#contact button[type="submit"] {
    font: 400 16px "Rubik";
    border: none
}

#contact {
    background: #ffffff;
    box-shadow: 0 0 0px 0 rgba(0, 0, 0, 0.2), 0 0px 5px 1px rgba(0, 0, 0, 0.24);
    border-radius: 30px;
    width: 600px;
    text-align: center;

}


#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact textarea {
    width: 80%;
    border: 1px solid #7a7a7a;
    border-radius: 20px;
    background: #FFF;
    padding: 10px;
    margin: 0 0 15px;
}

#contact input[type="text2"],
#contact input[type="text"] {
    width: 228px;
    border: 1px solid #7a7a7a;
    border-radius: 20px;
    padding: 10px;
    margin: 0 0 15px;

}


#contact input[type="text2"] {

    margin-left: 20px;
}

#contact input[type="text"]:hover,
#contact input[type="text2"]:hover,
#contact input[type="email"]:hover,
#contact input[type="tel"]:hover,
#contact input[type="url"]:hover,
#contact textarea:hover {
    -webkit-transition: border-color 0.3s ease-in-out;
    -moz-transition: border-color 0.3s ease-in-out;
    transition: border-color 0.3s ease-in-out;
    border: 1px solid #2DB8C5;
}

#contact input[type="text"]:focus,
#contact input[type="text2"]:focus,
#contact input[type="email"]:focus,
#contact input[type="tel"]:focus,
#contact input[type="url"]:focus,
#contact button[type="submit"]:focus,
#contact textarea:focus {
    outline: none;
}

#contact textarea {
    height: 100px;
    max-width: 100%;
    resize: none;
}


#contact button[type="submit"] {
    cursor: pointer;
    width: 100%;
    border: none;
    background: #2DB8C5;
    color: #FFF;
    padding: 10px;
    font-size: 16px;
    font-weight: 300;
    width: 120px;
    border-radius: 80px;
    margin-bottom: 20px;
}

#contact button[type="submit"]:hover {
    background: #28a4aF;
    -webkit-transition: background 0.3s ease-in-out;
    -moz-transition: background 0.3s ease-in-out;
    transition: background-color 0.3s ease-in-out;
}
</style>