"use client";
import { useFormState } from "react-dom";
import SendDevis from "../_actions/POST";
import Label from "./Label";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormDataSchema } from "@/lib/ContactFormSchema";
import { toast } from "sonner";

export type ContactFormInputs = z.infer<typeof FormDataSchema>;
export default function Devis() {
  //const [data,action] = useFormState(SendDevis,{})
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({ resolver: zodResolver(FormDataSchema) });

  const processForm: SubmitHandler<ContactFormInputs> = async (data, e) => {
    e?.preventDefault();
    const result = await SendDevis(data);

    if (result?.success) {
      toast.success("Email Sent!");
      reset();
      return;
    }

    console.log(result?.error);
    toast.error("something went wrong!");
  };

  return (
    <div className="bg-white  pt-10" id="devis">
      <div className="relative min-h-[740px] w-full sm:w-[600px] bg-main-light w-3/6 h-70 rounded-3xl drop-shadow-lg m-auto flex items-center flex-col justify-center">
        <svg
          className="absolute top-0 rounded-3xl fill-mainBg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path d="M0,256L60,224C120,192,240,128,360,128C480,128,600,192,720,202.7C840,213,960,171,1080,154.7C1200,139,1320,149,1380,154.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
        <svg
          className="absolute bottom-0 rounded-3xl fill-mainBg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path d="M0,256L60,224C120,192,240,128,360,128C480,128,600,192,720,202.7C840,213,960,171,1080,154.7C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
        <h1 className="text-main-light absolute top-6 text-5xl font-bold ">
          Devis
        </h1>
        <form
          onSubmit={handleSubmit(processForm)}
          className="grid grid-cols-2 w-9/12 gap-12 p-4"
          id="form1"
        >
          {/* <Label callback={register} title="nom"></Label>
          <Label callback={register} title="prenom"></Label>
          <Label callback={register} title="email"></Label>
          <Label callback={register} title="telephone"></Label> */}
          <div className="flex flex-col">
            <label htmlFor="name">nom</label>
            <input type="text" {...register("name")} />
            <p>{errors.name?.message}</p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="firstname">prénom</label>
            <input type="text" {...register("firstName")} />
            <p>{errors.firstName?.message}</p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">email</label>
            <input type="text" {...register("email")} />
            <p>{errors.message?.message}</p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone">tel</label>
            <input type="text" {...register("phone")} />
            <p>{errors.phone?.message}</p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="street">rue</label>
            <input type="text" {...register("street")} />
            <p>{errors.street?.message}</p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="postcode">code postal</label>
            <input type="text" {...register("postcode")} />
            <p>{errors.postcode?.message}</p>
          </div>
          <div className="flex flex-col col-span-2">
            <label htmlFor="projet">projet</label>
            <textarea
              {...register("message")}
              id=""
              cols={30}
              rows={5}
            ></textarea>
          </div>
          <button className="bg-mainBg text-main-light w-1/2 h-10 rounded-xl col-span-2 m-auto">
            {isSubmitting ? "Envoye en cours..." : "Envoyer"}
          </button>
        </form>
      </div>
    </div>
  );
}
