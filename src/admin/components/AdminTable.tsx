type AdminTableProps = {
  children: React.ReactNode;
};

export default function AdminTable({
  children,
}: AdminTableProps) {
  return (
    <div className="glass rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          {children}
        </table>
      </div>
    </div>
  );
}