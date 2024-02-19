import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";
import { TiArrowSortedDown } from "react-icons/ti";
const NavLinks = () => {
  return (
    <>
      {links.map((link, I) => (
        <div className="" key={I}>
          <div className="px-3 md:px-0 text-left md:cursor-pointer group">
            <h1 className="py-3 flex items-center gap-1 justify-center md:pr-5 group">
              <Link to={link.path}>{link.name}</Link>
              <span className="text-xl  md:block hidden group-hover:rotate-180 group-hover:-mt-2 group-hover:pb-2">
                <TiArrowSortedDown />
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-15 hidden group-hover:md:inline-block">
                  <div className="bg-[#2393DD] p-3 w-[200px]">
                    {link.sublinks.map((mysublinks, i) => (
                      <div key={i}>
                        {mysublinks.sublink.map((slink, i) => (
                          <li
                            className="text-md text-white my-2.5 hover:text-lg hover:transition-all ease-in"
                            key={i}
                          >
                            <Link
                              to={slink.link}
                              className="hover:text-primary"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
