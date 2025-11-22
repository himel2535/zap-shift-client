import React from "react";
import { useForm } from "react-hook-form";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleParcel = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2 className="text-secondary font-bold text-5xl leading-relaxed">
        Send A Parcel
      </h2>
      <h5 className="font-bold text-xl leading-relaxed">
        Enter your parcel details
      </h5>
      <form onSubmit={handleSubmit(handleParcel)} className="mt-12 p-4">
        {/* parcel type */}
        <div>
          <label className="label mr-4">
            <input
              {...register("parcelType")}
              type="radio"
              value="document"
              className="radio"
              defaultChecked
            />
            Document
          </label>
          <label className="label">
            <input
              {...register("parcelType")}
              type="radio"
              value="non-document"
              className="radio"
            />
            Non-Document
          </label>
        </div>
        {/* parcel info: name,weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-5 text-black">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName")}
              className="input w-full"
              placeholder="Parcel Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight (kg)</label>
            <input
              type="number"
              {...register("parcelWeight")}
              className="input w-full"
              placeholder="Parcel Name"
            />
          </fieldset>
        </div>

        {/* two column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* sender Details */}

          <div>
            <fieldset className="fieldset">
              <h4 className="text-2xl font-semibold">Sender Details</h4>
              {/* --sender name--- */}
              <label className="label">Sender Name</label>
              <input
                type="text"
                {...register("senderName")}
                className="input w-full"
                placeholder="Sender Name"
              />

              {/* ---sender address--- */}
              <label className="label mt-3">Sender Address</label>
              <input
                type="text"
                {...register("senderAddress")}
                className="input w-full"
                placeholder="Sender Address"
              />

              {/* ---sender District--- */}
              <label className="label mt-3">Sender District</label>
              <input
                type="text"
                {...register("senderDistrict")}
                className="input w-full"
                placeholder="Sender District"
              />
            </fieldset>
          </div>

          {/* receiver info */}
          <div>
            <fieldset className="fieldset">
              <h4 className="text-2xl font-semibold">Sender Details</h4>
              {/* --receiver name--- */}
              <label className="label">Receiver Name</label>
              <input
                type="text"
                {...register("receiverName")}
                className="input w-full"
                placeholder="Receiver Name"
              />

              {/* ---sender address--- */}
              <label className="label mt-3">Receiver Address</label>
              <input
                type="text"
                {...register("receiverAddress")}
                className="input w-full"
                placeholder="Receiver Address"
              />

              {/* ---sender District--- */}
              <label className="label mt-3">Receiver District</label>
              <input
                type="text"
                {...register("receiverDistrict")}
                className="input w-full"
                placeholder="Receiver District"
              />
            </fieldset>
          </div>
        </div>
        <input
          type="submit"
          className="btn btn-primary text-black"
          value="Send Parcel"
        />
      </form>
    </div>
  );
};

export default SendParcel;
