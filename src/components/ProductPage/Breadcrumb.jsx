// Breadcrumb.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="text-gray-600 my-4" aria-label="breadcrumb">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link to="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <li key={to} className="text-gray-500">{value}</li>
          ) : (
            <li key={to} className="flex items-center">
              <Link to={to} className="hover:underline">{value}</Link>
              <span className="mx-2">/</span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
