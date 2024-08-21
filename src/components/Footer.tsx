function Footer() {
  return (
    <footer className="bg-slate-700 rounded-md text-white p-2">
      <div className="text-center">
        <p className="text-sm">
          Coded by
          <a
            href="https://www.linkedin.com/in/codepapa360"
            target="_blank"
            className="text-cyan-500 transition-colors duration-200 ease-in-out hover:text-cyan-400 underline"
          >
            Alamin
          </a>
          & Challenge by
          <a
            href="https://www.frontendmentor.io/profile/CodePapa360"
            target="_blank"
            className="text-cyan-500 transition-colors duration-200 ease-in-out hover:text-cyan-400 underline"
          >
            Frontend Mentor
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
