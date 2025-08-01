import Input from "../../components/ui/input/Input";
import Label from "../../components/ui/label/Label";
import Button from "../ui/button/Button";
import ButtonSecundary from "../ui/button/ButtonSecondary";

const FormClient = ({ initialValues = {}, onSubmit, isEdit }) => {

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <div>
        <Label htmlFor="nombre">
        Nombre Completo *
        </Label>
        <Input
          id="nombre"
          name="nombre"
          placeholder="Ingrese el nombre completo"
          defaultValue={initialValues.nombre || ""}
        />
      </div>

      <div>
        <Label htmlFor="correo">
        Correo Electrónico *
        </Label>
        <Input
          id="correo"
          name="correo"
          placeholder="ejemplo@correo.com"
          defaultValue={initialValues.correo || ""}
        />
      </div>

      <div>
        <Label htmlFor="telefono">
        Teléfono
        </Label>
        <Input
          id="telefono"
          name="telefono"
          placeholder="123-456-7890"
          defaultValue={initialValues.telefono || ""}
        />
      </div>
      <div className="flex justify-end space-x-4 pt-6">
        <ButtonSecundary>Cancelar</ButtonSecundary>
        <Button>{isEdit ? 'Actualizar Client': 'Guardar Client'}</Button>
      </div>
    </form>
  );
};

export default FormClient;
