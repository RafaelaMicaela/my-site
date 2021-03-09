import "./style.css"

const About = () => {
    return (
        <div className="contact">
            <h1>Contate-me!</h1>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.204105887433!2d-35.24887288523289!3d-5.826820395777937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2551061bc4581%3A0x13beb24952ab98cf!2sR.%20Santa%20Helena%2C%20613%20-%20Felipe%20Camar%C3%A3o%2C%20Natal%20-%20RN%2C%2059072-470!5e0!3m2!1spt-BR!2sbr!4v1615288677163!5m2!1spt-BR!2sbr"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            ></iframe>

            <h4>Telefone</h4>
            <p>000 000 0000</p>

            <h4>Email</h4>
            <p>email@gmail.com</p>

            <h4>Endereço</h4>
            <p>Natal/RN, 59072475 </p>
            <div className="footer_social">
                <a href="https://github.com/RafaelaMicaela">
                    <img
                    src={`${process.env.PUBLIC_URL}/github.svg`}
                    alt="github" 
                    />

                 </a>
                <a href="https://github.com/RafaelaMicaela">
                    <img
                    src={`${process.env.PUBLIC_URL}/gmail.svg`}
                    alt="gmail" 
                    />

                </a>
                <a href="https://www.linkedin.com/in/rafaela-medeiros-72b5b2177/">
                    <img
                    src={`${process.env.PUBLIC_URL}/linkedin (1).svg`}
                    alt="linkedin" 
                    />

                </a>

      </div>
        </div>
    );
};

export default About;