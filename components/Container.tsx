interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="h-full max-w-[1200px] mx-auto">{children}</div>;
};

export default Container;
