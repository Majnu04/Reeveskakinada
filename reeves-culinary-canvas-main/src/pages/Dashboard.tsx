import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { onAuthStateChanged } from "firebase/auth";
import Navigation from "@/components/Navigation";

const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([
    {
      id: "ORD-001",
      date: "July 1, 2025",
      status: "Delivered",
      items: ["Butter Chicken", "Naan", "Jeera Rice"],
      total: "₹850",
    },
    {
      id: "ORD-002", 
      date: "July 3, 2025",
      status: "Processing",
      items: ["Paneer Tikka", "Garlic Naan", "Pulao"],
      total: "₹720",
    }
  ]);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!currentUser) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <>
      <Navigation cart={[]} showOrderPanel={false} setShowOrderPanel={() => {}} setCart={() => {}} />
      <div className="min-h-screen bg-background pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-playfair font-bold text-foreground">Your Dashboard</h1>
              <p className="text-muted-foreground mt-1">Welcome, {currentUser.email}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card shadow-lg border border-primary/10 p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-warm opacity-10 blur-2xl rounded-full transform translate-x-10 -translate-y-10"></div>
              <h3 className="text-xl font-bold text-foreground mb-2">Account Information</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-medium">Email:</span> {currentUser.email}</p>
                <p><span className="font-medium">Account Created:</span> {currentUser.metadata.creationTime}</p>
              </div>
              <Button className="mt-4 bg-gradient-warm text-white hover:opacity-90" size="sm">
                Edit Profile
              </Button>
            </Card>
          </div>

          <h2 className="text-2xl font-playfair font-bold mt-12 mb-6 text-foreground">Your Orders</h2>
          
          <div className="bg-card border border-primary/10 rounded-2xl shadow-lg overflow-hidden">
            {orders.length > 0 ? (
              <div className="divide-y divide-border">
                {orders.map((order) => (
                  <div key={order.id} className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-lg font-bold text-primary">{order.id}</span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            order.status === "Delivered" ? "bg-green-100 text-green-800" : 
                            order.status === "Processing" ? "bg-blue-100 text-blue-800" : 
                            "bg-yellow-100 text-yellow-800"
                          }`}>
                            {order.status}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">{order.total}</p>
                        <Button variant="outline" size="sm" className="mt-2">
                          View Details
                        </Button>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {order.items.map((item, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-muted-foreground">
                <p>You haven't placed any orders yet.</p>
                <Button className="mt-4 bg-gradient-warm text-white hover:opacity-90">
                  Browse Menu
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
