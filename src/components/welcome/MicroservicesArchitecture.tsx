
import React from 'react';
import { ArrowBigRight, ArrowBigDown, Database, Server, MessageSquare } from 'lucide-react';

const MicroservicesArchitecture = () => {
  // Define services for our Community Connect microservices diagram
  const services = [
    { 
      name: "User Service", 
      color: "bg-blue-100 border-blue-500", 
      icon: <Server className="h-5 w-5 text-blue-500" />,
      description: "Authentication & profiles",
      database: "DB(Users)",
      dbColor: "bg-red-100 border-red-500" 
    },
    { 
      name: "Campus Service", 
      color: "bg-green-100 border-green-500", 
      icon: <Server className="h-5 w-5 text-green-500" />,
      description: "Campus information",
      database: "DB(Campus)",
      dbColor: "bg-red-100 border-red-500"
    },
    { 
      name: "Events Service", 
      color: "bg-purple-100 border-purple-500", 
      icon: <Server className="h-5 w-5 text-purple-500" />,
      description: "Event management",
      database: "DB(Events)",
      dbColor: "bg-red-100 border-red-500"
    },
    { 
      name: "Groups Service", 
      color: "bg-orange-100 border-orange-500", 
      icon: <Server className="h-5 w-5 text-orange-500" />,
      description: "Group discussions",
      database: "DB(Groups)",
      dbColor: "bg-red-100 border-red-500"
    },
    { 
      name: "Jobs Service", 
      color: "bg-yellow-100 border-yellow-500", 
      icon: <Server className="h-5 w-5 text-yellow-500" />,
      description: "Job listings",
      database: "DB(Jobs)",
      dbColor: "bg-red-100 border-red-500"
    },
    { 
      name: "Housing Service", 
      color: "bg-teal-100 border-teal-500", 
      icon: <Server className="h-5 w-5 text-teal-500" />,
      description: "Housing listings",
      database: "DB(Housing)",
      dbColor: "bg-red-100 border-red-500"
    },
    { 
      name: "Notification Service", 
      color: "bg-pink-100 border-pink-500", 
      icon: <MessageSquare className="h-5 w-5 text-pink-500" />,
      description: "System notifications",
      database: "DB(Notifications)",
      dbColor: "bg-red-100 border-red-500"
    },
  ];

  return (
    <div className="p-4 bg-white rounded-xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Community Connect Microservices Architecture</h2>
      
      {/* Main Interface - Similar to "bike sharing interface" in the example */}
      <div className="flex flex-col items-center">
        <div className="rounded-lg bg-green-100 border-2 border-green-500 px-3 py-1 text-center font-medium mb-4">
          Community Connect Interface
        </div>
        
        {/* Dotted lines going down */}
        <div className="flex justify-center space-x-8 mb-2">
          {services.map((_, i) => (
            <div key={i} className="border-l-2 border-dashed border-gray-400 h-8"></div>
          ))}
        </div>
        
        {/* Services Row */}
        <div className="flex justify-center space-x-2 mb-4">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`${service.color} border-2 rounded-lg px-1 py-1 text-center w-24`}
            >
              <div className="flex items-center justify-center mb-1">
                {service.icon}
                <span className="ml-1 font-medium text-xs">{service.name}</span>
              </div>
              <p className="text-xs">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* API and Read/write labels */}
        <div className="flex justify-center space-x-8 mb-1">
          {services.map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-xs font-medium mb-1">API</div>
              <div className="border-l-2 border-dashed border-gray-400 h-4"></div>
              {i % 2 === 0 ? (
                <div className="text-xs font-medium -ml-6">Read/write</div>
              ) : (
                <div className="text-xs font-medium ml-6">Read/write</div>
              )}
            </div>
          ))}
        </div>
        
        {/* Gateway, Databases and Services Row */}
        <div className="flex justify-center space-x-4 mt-2">
          <div className="bg-red-100 border-2 border-red-500 rounded-lg px-2 py-1 text-center text-xs">
            <span className="font-medium">Gateway</span>
          </div>
          
          {services.map((service, index) => (
            <React.Fragment key={index}>
              {index === 2 && (
                <div className="bg-red-100 border-2 border-red-500 rounded-lg px-2 py-1 text-center text-xs">
                  <span className="font-medium">User services</span>
                </div>
              )}
              
              <div className={`${service.dbColor} border-2 border-red-500 rounded-lg px-2 py-1 text-center text-xs`}>
                <span className="font-medium">{service.database}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      
      {/* Legend */}
      <div className="border border-gray-300 rounded-md p-2 bg-gray-50 mt-6">
        <h3 className="text-xs font-semibold mb-1">Legend</h3>
        <div className="grid grid-cols-2 gap-1 text-xs">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-100 border border-green-500 rounded-sm mr-1"></div>
            <span>Main Interface</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-100 border border-red-500 rounded-sm mr-1"></div>
            <span>Databases & Support</span>
          </div>
          <div className="flex items-center">
            <Server className="h-3 w-3 text-gray-500 mr-1" />
            <span>Microservice</span>
          </div>
          <div className="flex items-center">
            <Database className="h-3 w-3 text-gray-500 mr-1" />
            <span>Database</span>
          </div>
        </div>
      </div>
      
      {/* Explanatory text */}
      <div className="mt-4 text-xs text-gray-700">
        <p className="mb-1">This architecture shows:</p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Each service as a separate component with its responsibilities</li>
          <li>Databases associated with each service for data management</li>
          <li>API calls and messaging between services for interaction</li>
        </ul>
      </div>
    </div>
  );
};

export default MicroservicesArchitecture;
