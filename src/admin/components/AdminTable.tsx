type AdminTableProps = {
  children: React.ReactNode;
};

export default function AdminTable({
  children,
}: AdminTableProps) {
  return (
    <div className="glass rounded-xl overflow-hidden">
      <div className="overflow-hidden">
        <table className="w-full table-fixed">
          {children}
        </table>
      </div>
    </div>
  );
}