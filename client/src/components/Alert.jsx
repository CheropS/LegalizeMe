import React from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export function Alert({ variant = "default", className, children }) {
    const baseStyles = "p-4 rounded-md flex items-start space-x-2";
    const variantStyles = {
        default: "bg-blue-50 text-blue-700 border border-blue-200",
        destructive: "bg-red-50 text-red-700 border border-red-200",
        success: "bg-green-50 text-green-700 border border-green-200",
    };

    return (
        <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
            <div className="flex-shrink-0 mt-0.5">
                {variant === "destructive" && <AlertCircle className="h-4 w-4" />}
                {variant === "success" && <CheckCircle2 className="h-4 w-4" />}
                {variant === "default" && <AlertCircle className="h-4 w-4" />}
            </div>
            <div className="flex-1 space-y-1">
                {children}
            </div>
        </div>
    );
}

export function AlertTitle({ className, children }) {
    return (
        <h5 className={`text-sm font-medium leading-none ${className}`}>
            {children}
        </h5>
    );
}

export function AlertDescription({ className, children }) {
    return (
        <p className={`text-sm font-normal ${className}`}>
            {children}
        </p>
    );
}

// Example usage component
export function AlertExample() {
    return (
        <div className="space-y-4">
            <Alert variant="default">
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>This is an informational message.</AlertDescription>
            </Alert>

            <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>Something went wrong! Please try again.</AlertDescription>
            </Alert>

            <Alert variant="success">
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>Your changes have been saved successfully.</AlertDescription>
            </Alert>
        </div>
    );
}

export default Alert;