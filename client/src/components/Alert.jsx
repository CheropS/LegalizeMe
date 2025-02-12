import React from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export function Alert({ variant = "default", className, children }) {
    const baseStyles = "p-4 rounded-md flex items-center space-x-2";
    const variantStyles = {
        default: "bg-blue-50 text-blue-700 border border-blue-200",
        destructive: "bg-red-50 text-red-700 border border-red-200",
        success: "bg-green-50 text-green-700 border border-green-200",
    };

    return (
        <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
            {variant === "destructive" && <AlertCircle className="h-4 w-4" />}
            {variant === "success" && <CheckCircle2 className="h-4 w-4" />}
            {children}
        </div>
    );
}

export function AlertDescription({ className, children }) {
    return <p className={`text-sm ${className}`}>{children}</p>;
}