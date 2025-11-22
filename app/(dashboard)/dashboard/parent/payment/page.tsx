"use client";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
export default function ParentPaymentCard() {
  const [paymentInvoices, setPaymentInvoices] = useState<any[]>([]);
  const [balance, setBalance] = useState(0);
  const [accountNumber, setAccountNumber] = useState("");

  useEffect(() => {
    const fetchedPaymentData = {
      accountNumber: ".....",
      balance: 0,
      lastInvoices: [
        { id: "INV001", date: "2025-11-01", amount: 500, status: "Paid" },
        { id: "INV002", date: "2025-12-01", amount: 500, status: "Pending" },
      ],
    };

    const postgresNeonDbConnection = async () => {
      const token = Cookies.get("token");
      const sendToken = await fetch("/api/parent-balance-api", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: token,
        }),
      });
      const serverRespond = await sendToken.json();
      console.log(serverRespond);
      setAccountNumber(serverRespond.parent_account);
      setBalance(serverRespond.parent_balance);
    };
    postgresNeonDbConnection();
    setAccountNumber(fetchedPaymentData.accountNumber);

    setPaymentInvoices(fetchedPaymentData.lastInvoices);
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-6 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-yellow-700 mb-4">
        Payment Information
      </h2>

      {/* Account Info */}
      <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
        <div>
          <p className="text-gray-600 text-sm">Account Number</p>
          <p className="text-gray-800 font-semibold">{accountNumber}</p>
        </div>
        <div className="text-right">
          <p className="text-gray-600 text-sm">Balance</p>
          <p className="text-gray-800 font-bold text-xl">{balance} ETB</p>
        </div>
        <button
          onClick={() => {
            window.location.href = `${process.env.NEXT_PUBLIC_GEEZ_BANK}?account=${accountNumber}&transferTo=2301-5636-15936-6828`;
          }}
          className="ml-4 px-4 py-2 bg-yellow-700 text-white rounded-lg hover:bg-yellow-800 transition-colors"
        >
          Pay Now
        </button>
      </div>

      {/* Last Invoices Table */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Last Invoices
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="px-3 py-2 text-gray-600 text-sm border-b">
                  Invoice ID
                </th>
                <th className="px-3 py-2 text-gray-600 text-sm border-b">
                  Date
                </th>
                <th className="px-3 py-2 text-gray-600 text-sm border-b">
                  Amount
                </th>
                <th className="px-3 py-2 text-gray-600 text-sm border-b">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {paymentInvoices.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="hover:bg-yellow-50 transition-colors"
                >
                  <td className="px-3 py-2 text-gray-800">{invoice.id}</td>
                  <td className="px-3 py-2 text-gray-800">{invoice.date}</td>
                  <td className="px-3 py-2 text-gray-800">
                    {invoice.amount} ETB
                  </td>
                  <td
                    className={`px-2 py-1 font-semibold rounded-full text-xs text-center ${
                      invoice.status === "Paid"
                        ? "bg-green-200 text-green-800"
                        : "bg-yellow-200 text-yellow-800"
                    }`}
                  >
                    {invoice.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
