import Link from "next/link";
import "./table.scss";
import Section from "../section/Section";

export default function Table(): React.JSX.Element {
  return (
    <Section className="table-container p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4">Tickets recientes</h2>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Priority</th>
            <th className="px-4 py-2">Assigned To</th>
            <th className="px-4 py-2">Created At</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">Login issue</td>
            <td className="border px-4 py-2">Open</td>
            <td className="border px-4 py-2">High</td>
            <td className="border px-4 py-2">John Doe</td>
            <td className="border px-4 py-2">2024-06-15</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">2</td>
            <td className="border px-4 py-2">Password reset</td>
            <td className="border px-4 py-2">In Progress</td>
            <td className="border px-4 py-2">Medium</td>
            <td className="border px-4 py-2">Jane Smith</td>
            <td className="border px-4 py-2">2024-06-16</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">3</td>
            <td className="border px-4 py-2">Account locked</td>
            <td className="border px-4 py-2">Resolved</td>
            <td className="border px-4 py-2">Low</td>
            <td className="border px-4 py-2">Alice Johnson</td>
            <td className="border px-4 py-2">2024-06-17</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">4</td>
            <td className="border px-4 py-2">Login issue</td>
            <td className="border px-4 py-2">Open</td>
            <td className="border px-4 py-2">High</td>
            <td className="border px-4 py-2">John Doe</td>
            <td className="border px-4 py-2">2024-06-15</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">5</td>
            <td className="border px-4 py-2">Login issue</td>
            <td className="border px-4 py-2">Open</td>
            <td className="border px-4 py-2">High</td>
            <td className="border px-4 py-2">John Doe</td>
            <td className="border px-4 py-2">2024-06-15</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={6} className="text-center">
              <Link href="/tickets" className="link-view-all">
                Ver todos los tickets
              </Link>
            </td>
          </tr>
        </tfoot>
      </table>
    </Section>
  );
}
