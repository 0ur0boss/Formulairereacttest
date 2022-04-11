import "./app.css";
import FormInput from "./components/FormInput";
// import FormSelect from "./components/FormSelect";

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
    {
      id: 2,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    }, 
  ];

  const values = [
    {
      id: 1,
      label: "dev"
    },
    {
      id: 2,
      label: "marketing",
    },
    {
      id: 3,
      label: "commerce",
    },
    {
      id: 4,
      label: "produit",
    },
    {
      id: 5,
      label: "finance",
    },
    {
      id: 6,
      label: "autre",
    },
  ];



  // Quand on click sur le btn on render la data du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const valueInput = Object.fromEntries(data.entries())
    const valueSelect = event.target.select.value
    // On recupaire la data du formulaire comme ca
    console.log(valueInput,valueSelect)
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
        {/* Ici le select qui a des valeur modulabe */}
        <div className="FormSelect">
        <label>Services</label>
          <select id="select">
            <option value="">---</option>
            {/* Pour chaque valeurs dans values on crée une option dans le select */}
            {values.map((value) => (
            <option key={value.id} value={value.label}>{value.label}
            </option>
            ))}
          </select>
        </div>
        <button>Sent the form</button>
      </form>
    </div>
  );
};

export default App;
