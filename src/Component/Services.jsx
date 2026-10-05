import { CheckCircle2, Truck, Wallet } from "lucide-react";
import { FaCarSide, FaCheckCircle, FaWallet } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";

function Services() {
  return (
    <div className="flex gap-10 px-15 mx-20">
      <div className="flex justify-between gap-2 items-center">
        <FaCarSide size={37} strokeWidth={20} color="red"/>
        <div className="flex flex-col">
          <h2 className="font-bold text-sm tracking-wide">Free Shiping</h2>
          <p className="text-xs text-gray-700">Free Shiping On All Order</p>
        </div>
      </div>
      <div className="flex justify-between gap-2 items-center">
        <FaCheckCircle size={35} color="red" />
        <div className="flex flex-col">
          <h2 className="font-bold text-sm tracking-wide">Check Duration</h2>
          <p className="text-xs text-gray-700">One Week For Check</p>
        </div>
      </div>
      <div className="flex justify-between gap-2 items-center">
        <TfiHeadphoneAlt size={34} color="red" strokeWidth={1}/>
        <div className="flex flex-col">
          <h2 className="font-bold text-sm tracking-wide">Call Services</h2>
          <p className="text-xs text-gray-700">24 Hours Services</p>
        </div>
      </div>
      <div className="flex justify-between gap-2 items-center">
        <FaWallet size={35} className="text-red-600" />
        <div className="flex flex-col">
          <h2 className="font-bold text-sm tracking-wide">Secure Payment</h2>
          <p className="text-xs text-gray-700">Secure Money Payment</p>
        </div>
      </div>
    </div>
  );
}
export default Services;
