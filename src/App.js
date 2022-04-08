import "./app.css";
import FormInput from "./components/FormInput";
import FormSelect from "./components/FormSelect";

const App = () => {


  // On peu rajouter autant de input que l'on souhaite ici
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
  ];

  // Quand on click sur le btn on render la data du formulaire (je n'est pas réussi a faire fonctionné le select...)
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    // On recupaire la data du formulaire comme ca on peu l exporter dans un fichier Json avec JSON.stringify()
    console.log(Object.fromEntries(data.entries()))
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>

        {/* On genere un input par input ecrit dans l objet inputs */}
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
          />
        ))}
        {/* Ici le select qui a des valeur modulabe dans le component */}
          <FormSelect 
            name="service"

          />
        <button>Envoyé le formulaire</button>
      </form>
    </div>
  );
};

export default App;
