import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";

const Faq = () => {
  const [faq, setFaq] = useState([
    {
      id: 1,
      heading: "   Lorem ipsum dolor sit amet consectetur, adipisicing elit.?",
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo adipisci dicta perferendis, laudantium dolores magnam natus assumenda consequatur fugiat rerum, eos totam neque, dolorem alias voluptates facere expedita nobis recusandae quaerat ipsa quidem sed est sequi. Molestias blanditiis corporis numquam earum, sit culpa? Optio iure illum molestiae sunt hic nihil!",
      isOpen: false,
    },
    {
      id: 2,
      heading: "   Lorem ipsum dolor perferendis, laudanti  sit amet consectetur, adipisicing elit.?",
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo adipisci dicta perferendis, laudantium dolores magnam natus assumenda consequatur fugiat rerum, eos totam neque, dolorem alias voluptates facere expedita nobis recusandae quaerat ipsa quidem sed est sequi. Molestias blanditiis corporis numquam earum, sit culpa? Optio iure illum molestiae sunt hic nihil!",
      isOpen: false,
    },
    {
      id: 3,
      heading: "   Lorem ipsum dolor laudantium dolores magnam natus assumenda consequatur fugiat rerum, eos totam neque sit amet consectetur, adipisicing elit.?",
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo adipisci dicta perferendis, laudantium dolores magnam natus assumenda consequatur fugiat rerum, eos totam neque, dolorem alias voluptates facere expedita nobis recusandae quaerat ipsa quidem sed est sequi. Molestias blanditiis corporis numquam earum, sit culpa? Optio iure illum molestiae sunt hic nihil!",
      isOpen: false,
    },
    {
      id: 4,
      heading: "   Lorem ipsum dolor sit amet consectetur, adipisicing elit.?",
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo adipisci dicta perferendis, laudantium dolores magnam natus assumenda consequatur fugiat rerum, eos totam neque, dolorem alias voluptates facere expedita nobis recusandae quaerat ipsa quidem sed est sequi. Molestias blanditiis corporis numquam earum, sit culpa? Optio iure illum molestiae sunt hic nihil!",
      isOpen: false,
    },
  ]);

  function handelFaq(id) {
    const Faq = [...faq];
    Faq[id - 1].isOpen = !Faq[id - 1].isOpen;
    setFaq(Faq);
  }

  return (
    <div className="mt-20 mx-auto w-5/6 ">
      <div className="text-center ">
        <h2 className="text-yellow-600">FREQUENT QUESTION</h2>
        <p className="text-xl my-1 font-semibold text-blue-950">
          Do You Have Any Question
        </p>
      </div>

      <div className="faq mt-10">
        {faq?.map((item) => {
          return (
            <div className="my-4 divide-y divide-dashed" key={item.id}>
              <div className="1  gap-2 flex ">
                {!item.isOpen ? (
                  <PlusIcon
                    onClick={() => handelFaq(item.id)}
                    className="w-6 cursor-pointer h-6 bg-green-400 text-white rounded-full p-1"
                  />
                ) : (
                  <MinusIcon
                    onClick={() => handelFaq(item.id)}
                    className="w-6 h-6 cursor-pointer bg-green-400 text-white rounded-full p-1"
                  />
                )}

                <p className="text-sm  text-blue-950 font-medium">
                    {item.heading}
                  </p>

              </div>
           {
            item.isOpen &&    <p className="px-7 text-sm my-3">{item.desc}</p>

           }
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
