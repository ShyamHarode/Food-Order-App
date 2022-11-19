import React from "react";
import { useContext } from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";

const OrderSummary = ({ add, remove, total }) => {
  const { cart, showModal, setShowModal } = useContext(UserContext);

  return (
    <>
      {showModal ? (
        <>
          <div
            class="relative z-10"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div class="fixed inset-0 z-10 overflow-y-auto">
              <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                      <div class="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3
                          class="text-lg font-medium leading-6 text-gray-900"
                          id="modal-title"
                        >
                          Order Summary
                        </h3>

                        <ul class="mt-2 w-full">
                          {cart.map((i) => {
                            return (
                              <li className="w-full flex justify-between items-center">
                                <span class="text-sm text-gray-500">
                                  {i.name}
                                </span>
                                <span class="text-sm text-gray-500">
                                  {i.qty}
                                </span>
                                <div>
                                  <button
                                    //   onClick={() => remove(index)}
                                    className="bg-blue-600 p-1 btn m-2"
                                  >
                                    -
                                  </button>
                                  <button
                                    //   onClick={() => add(index)}
                                    className="bg-rose-600 p-1 btn m-2"
                                  >
                                    +
                                  </button>
                                </div>
                              </li>
                            );
                          })}
                        </ul>

                        <span class="text-sm text-gray-500">
                          Total: {total}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end m-2 border-solid  rounded-b">
                    <Link to="/thankyou" relative="path">
                      <button
                        className="text-white bg-blue-500 active:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        //   onClick={() => setShowModal(false)}
                      >
                        SAVE AND CHECKOUT
                      </button>
                    </Link>
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      CANCEL
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default OrderSummary;
