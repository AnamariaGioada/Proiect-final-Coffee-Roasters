import "./field.scss";

interface FieldProps {
  orderNumber: string;
  name: string;
}

function Field({ orderNumber, name }: React.PropsWithChildren<FieldProps>) {
  return (
    <div className="field">
      <h4 className="order">{orderNumber}</h4>
      <h4 className="name">{name}</h4>
    </div>
  );
}

export default Field;
