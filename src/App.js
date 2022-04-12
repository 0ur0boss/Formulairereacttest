import "./app.css";
import FormInput from "./components/FormInput";
// import FormSelect from "./components/FormSelect";
import dataInput from "./data/Input.json"
import dataOption from "./data/optionSelect.json"


const App = () => {




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
        {dataInput.map((input) => (
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
            {dataOption.map((value) => (
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
