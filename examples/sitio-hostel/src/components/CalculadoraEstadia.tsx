"use client";

import { useState, useMemo } from "react";

const PRECIO_POR_NOCHE_DEFAULT = 15000;

function parseLocalDate(value: string): Date | null {
  if (!value) return null;
  const d = new Date(value + "T12:00:00");
  return isNaN(d.getTime()) ? null : d;
}

function diffNights(from: Date, to: Date): number {
  const ms = to.getTime() - from.getTime();
  return Math.max(0, Math.floor(ms / (24 * 60 * 60 * 1000)));
}

export function CalculadoraEstadia() {
  const today = useMemo(() => {
    const d = new Date();
    return d.toISOString().slice(0, 10);
  }, []);

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [precioNoche, setPrecioNoche] = useState(String(PRECIO_POR_NOCHE_DEFAULT));

  const resultado = useMemo(() => {
    const desde = parseLocalDate(checkIn);
    const hasta = parseLocalDate(checkOut);
    const precio = Number(precioNoche) || 0;
    if (!desde || !hasta || hasta <= desde || precio <= 0) return null;
    const noches = diffNights(desde, hasta);
    return { noches, total: noches * precio };
  }, [checkIn, checkOut, precioNoche]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
      <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
        Calculá tu estadía
      </h3>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        Ingresá fechas y precio por noche para ver el total.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="checkin" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Entrada
          </label>
          <input
            id="checkin"
            type="date"
            min={today}
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100"
          />
        </div>
        <div>
          <label htmlFor="checkout" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Salida
          </label>
          <input
            id="checkout"
            type="date"
            min={checkIn || today}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100"
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="precio" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Precio por noche ($)
        </label>
        <input
          id="precio"
          type="number"
          min="1"
          step="100"
          value={precioNoche}
          onChange={(e) => setPrecioNoche(e.target.value)}
          className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 sm:w-40"
        />
      </div>

      {resultado && (
        <div className="mt-5 rounded-lg bg-slate-100 p-4 dark:bg-slate-700">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <strong>{resultado.noches}</strong> {resultado.noches === 1 ? "noche" : "noches"}
          </p>
          <p className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">
            Total: ${resultado.total.toLocaleString("es-AR")}
          </p>
        </div>
      )}

      <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
        Cálculo orientativo. Confirmá precio y disponibilidad por WhatsApp.
      </p>
    </div>
  );
}
