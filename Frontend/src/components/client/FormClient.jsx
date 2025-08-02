import Input from "../../components/ui/input/Input";
import Label from "../../components/ui/label/Label";
import Button from "../ui/button/Button";
import ButtonSecundary from "../ui/button/ButtonSecondary";

const FormClient = ({ initialValues = {}, isEdit }) => {

  return (
    <form className="space-y-6" >
      <div>
        <Label htmlFor="nombre">
        Nombre Completo *
        </Label>
        <Input
          type="text"
          id="nombre"
          placeholder="Ingrese el nombre completo"
          defaultValue={initialValues.nombre || ""}
          required
        />
      </div>

      <div>
        <Label htmlFor="correo">
        Correo Electrónico *
        </Label>
        <Input
          type="email"
          id="correo"
          placeholder="ejemplo@correo.com"
          defaultValue={initialValues.correo || ""}
          required
        />
      </div>

      <div>
        <Label htmlFor="telefono">
        Teléfono
        </Label>
        <Input
          type="tel"
          id="telefono"
          placeholder="123-456-7890"
          defaultValue={initialValues.telefono || ""}
        />
      </div>
      <div className="flex justify-end space-x-4 pt-6">
        <ButtonSecundary>Cancelar</ButtonSecundary>
        <Button
        type="submit"
        >{isEdit ? 'Actualizar Client': 'Guardar Client'}</Button>
      </div>
    </form>
  );
};

export default FormClient;
