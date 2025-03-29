
import React from 'react';
import { ArrowBigRight, ArrowBigDown, Database, Server } from 'lucide-react';

const MicroservicesArchitecture = () => {
  // Define services for our diagram
  const services = [
    { name: "User Service", color: "bg-blue-100 border-blue-500", icon: <Server className="h-5 w-5 text-blue-500" /> },
    { name: "Campus Service", color: "bg-green-100 border-green-500", icon: <Server className="h-5 w-5 text-green-500" /> },
    { name: "Events Service", color: "bg-purple-100 border-purple-500", icon: <Server className="h-5 w-5 text-purple-500" /> },
    { name: "Groups Service", color: "bg-orange-100 border-orange-500", icon: <Server className="h-5 w-5 text-orange-500" /> },
    { name: "Jobs Service", color: "bg-red-100 border-red-500", icon: <Server className="h-5 w-5 text-red-500" /> },
    { name: "Housing Service", color: "bg-yellow-100 border-yellow-500", icon: <Server className="h-5 w-5 text-yellow-500" /> },
    { name: "Notification Service", color: "bg-pink-100 border-pink-500", icon: <Server className="h-5 w-5 text-pink-500" /> },
  ];

  return (
    <div className="p-6 bg-white rounded-xl shadow-xl max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Community Connect Microservices Architecture</h2>
      
      {/* Client Layer */}
      <div className="mb-6">
        <div className="border-2 border-gray-400 rounded-md p-4 bg-gray-100 text-center font-medium">
          Mobile and Web Clients (React)
        </div>
        <div className="flex justify-center my-2">
          <ArrowBigDown className="h-8 w-8 text-gray-400" />
        </div>
      </div>
      
      {/* API Gateway */}
      <div className="mb-6">
        <div className="border-2 border-indigo-500 rounded-md p-4 bg-indigo-100 text-center font-medium">
          API Gateway / Load Balancer
        </div>
        <div className="flex justify-center my-2">
          <ArrowBigDown className="h-8 w-8 text-gray-400" />
        </div>
      </div>
      
      {/* Microservices */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {services.map((service, index) => (
          <div key={index} className={`border-2 ${service.color} rounded-md p-4 flex flex-col items-center`}>
            <div className="flex items-center mb-2">
              {service.icon}
              <span className="ml-2 font-medium">{service.name}</span>
            </div>
            <div className="mt-2 flex items-center">
              <Database className="h-4 w-4 mr-2" />
              <span className="text-xs">Database</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Message Broker */}
      <div className="mb-6">
        <div className="border-2 border-teal-500 rounded-md p-4 bg-teal-100 text-center font-medium">
          Message Broker (Kafka/RabbitMQ)
        </div>
      </div>
      
      {/* Arrows to show connections */}
      <div className="flex justify-center items-center space-x-4 mb-4">
        <div className="text-center">
          <ArrowBigRight className="h-6 w-6 text-gray-400 mx-auto" />
          <span className="text-xs text-gray-500">API Calls</span>
        </div>
        <div className="text-center">
          <ArrowBigDown className="h-6 w-6 text-gray-400 mx-auto" />
          <span className="text-xs text-gray-500">Event Publishing</span>
        </div>
      </div>
      
      {/* Legend */}
      <div className="border border-gray-300 rounded-md p-4 bg-gray-50">
        <h3 className="text-sm font-semibold mb-2">Legend</h3>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-indigo-100 border border-indigo-500 rounded-sm mr-2"></div>
            <span>API Gateway</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-teal-100 border border-teal-500 rounded-sm mr-2"></div>
            <span>Message Broker</span>
          </div>
          <div className="flex items-center">
            <Server className="h-3 w-3 text-gray-500 mr-2" />
            <span>Microservice</span>
          </div>
          <div className="flex items-center">
            <Database className="h-3 w-3 text-gray-500 mr-2" />
            <span>Database</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroservicesArchitecture;
