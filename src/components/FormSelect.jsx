import "./formSelect.css";

// Toute les valeurs qu'on retrouve dans le select
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
  
const FormSelect = (props) => {


  return (
    <div className="FormSelect">
      <label>Services</label>
      <select>
      <option value="">---</option>
          {/* Pour chaque valeurs dans values on crée une option dans le select */}
        {values.map((value) => (
          <option key={value.id} value={value.label}>{value.label}
          </option>
        ))}
    </select>
    </div>
  );
};

export default FormSelect;
