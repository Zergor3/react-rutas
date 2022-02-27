import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Productos = () => {
  let { search } = useLocation();
  let query = new URLSearchParams(search);
  const LIMIT = 20;
  let start = parseInt(query.get("inicio")) || 1;
  let end = parseInt(query.get("fin")) || LIMIT;
  let history = useHistory();

  const handlePrev = () => {
    history.push({ search: `?inicio=${start - LIMIT}&fin=${end - LIMIT}` });
  };

  const handleNext = () => {
    history.push({ search: `?inicio=${start + LIMIT}&fin=${end + LIMIT}` });
  };

  return (
    <div>
      <h3>Productos</h3>
      <p>
        Mostrando productos del <b>{start}</b> al <b>{end}</b>.
      </p>
      {start > LIMIT && <button onClick={handlePrev}>Atras</button>}
      <button onClick={handleNext}>Adelante</button>
    </div>
  );
};

export default Productos;
