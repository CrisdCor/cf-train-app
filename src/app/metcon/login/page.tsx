import InputCustom from "@/components/InputCustom";
import ButtonLink from "@/components/ButtonLink";

export default function LoginPage() {
  return (
    <main className="mx-auto max-w-[300px] min-h-screen place-content-center text-center">
      <h2 className="text-5xl uppercase">Atleta</h2>
      <p className="mt-2">
        Bienvenido, para iniciar el wod ingresa la contraseña y dale clic al
        botón Start
      </p>
      <form className="mt-3 flex flex-col gap-3">
        <InputCustom type="password" />
        <ButtonLink text="Start" path="#" />
      </form>
    </main>
  );
}
