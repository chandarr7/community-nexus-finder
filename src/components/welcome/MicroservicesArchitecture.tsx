
import React from 'react';
import { ArrowBigRight, Database, Server, MessageSquare, Cloud, Lock, Scale } from 'lucide-react';

const MicroservicesArchitecture = () => {
  // Define services for our Community Connect microservices diagram
  const services = [
    { 
      name: "User Service", 
      color: "bg-blue-100 border-blue-500", 
      icon: <Server className="h-5 w-5 text-blue-500" />,
      description: "Authentication & profiles",
      database: "DB(Users)",
      dbColor: "bg-red-100 border-red-500",
      cloudService: "AWS Cognito" 
    },
    { 
      name: "Campus Service", 
      color: "bg-green-100 border-green-500", 
      icon: <Server className="h-5 w-5 text-green-500" />,
      description: "Campus information",
      database: "DB(Campus)",
      dbColor: "bg-red-100 border-red-500",
      cloudService: "AWS S3"
    },
    { 
      name: "Events Service", 
      color: "bg-purple-100 border-purple-500", 
      icon: <Server className="h-5 w-5 text-purple-500" />,
      description: "Event management",
      database: "DB(Events)",
      dbColor: "bg-red-100 border-red-500",
      cloudService: "AWS DynamoDB"
    },
    { 
      name: "Groups Service", 
      color: "bg-orange-100 border-orange-500", 
      icon: <Server className="h-5 w-5 text-orange-500" />,
      description: "Group discussions",
      database: "DB(Groups)",
      dbColor: "bg-red-100 border-red-500",
      cloudService: "AWS ECS"
    },
    { 
      name: "Jobs Service", 
      color: "bg-yellow-100 border-yellow-500", 
      icon: <Server className="h-5 w-5 text-yellow-500" />,
      description: "Job listings",
      database: "DB(Jobs)",
      dbColor: "bg-red-100 border-red-500",
      cloudService: "AWS Lambda"
    },
    { 
      name: "Housing Service", 
      color: "bg-teal-100 border-teal-500", 
      icon: <Server className="h-5 w-5 text-teal-500" />,
      description: "Housing listings",
      database: "DB(Housing)",
      dbColor: "bg-red-100 border-red-500",
      cloudService: "AWS RDS"
    },
    { 
      name: "Notification Service", 
      color: "bg-pink-100 border-pink-500", 
      icon: <MessageSquare className="h-5 w-5 text-pink-500" />,
      description: "System notifications",
      database: "DB(Notifications)",
      dbColor: "bg-red-100 border-red-500",
      cloudService: "AWS SNS"
    },
  ];

  return (
    <div className="p-2 bg-white rounded-xl mx-auto">
      <h2 className="text-lg font-bold mb-3 text-center">Community Connect Microservices Architecture</h2>
      
      {/* Client Layer */}
      <div className="flex flex-col items-center">
        <div className="rounded-lg bg-green-100 border-2 border-green-500 px-3 py-1 text-center font-medium mb-2">
          Community Connect Interface (React + Typescript)
        </div>
        
        {/* API Gateway Layer */}
        <div className="flex items-center justify-center w-full">
          <div className="h-6 border-l-2 border-dashed border-gray-400"></div>
        </div>
        <div className="bg-blue-100 border-2 border-blue-500 rounded-lg px-3 py-1 text-center font-medium mb-2 w-64">
          API Gateway (AWS API Gateway)
        </div>
        
        {/* Security Layer */}
        <div className="flex items-center justify-center w-full mb-2">
          <div className="h-6 border-l-2 border-dashed border-gray-400"></div>
        </div>
        <div className="flex justify-center mb-2 w-full">
          <div className="bg-orange-100 border-2 border-orange-500 rounded-lg px-3 py-1 text-center font-medium w-64 flex items-center justify-center">
            <Lock className="h-4 w-4 mr-1" />
            <span>Security Layer (JWT, OAuth2)</span>
          </div>
        </div>
        
        {/* Load Balancer */}
        <div className="flex items-center justify-center w-full mb-2">
          <div className="h-6 border-l-2 border-dashed border-gray-400"></div>
        </div>
        <div className="flex justify-center mb-2 w-full">
          <div className="bg-indigo-100 border-2 border-indigo-500 rounded-lg px-3 py-1 text-center font-medium w-64 flex items-center justify-center">
            <Scale className="h-4 w-4 mr-1" />
            <span>Load Balancer (AWS ELB)</span>
          </div>
        </div>
        
        {/* Service Mesh */}
        <div className="flex items-center justify-center w-full mb-1">
          <div className="h-4 border-l-2 border-dashed border-gray-400"></div>
        </div>
        
        {/* Microservices Row */}
        <div className="flex justify-center space-x-2 mb-2">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`${service.color} border-2 rounded-lg px-1 py-1 text-center w-20`}
            >
              <div className="flex items-center justify-center mb-1">
                {service.icon}
                <span className="ml-1 font-medium text-xs">{service.name}</span>
              </div>
              <p className="text-[8px]">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* Cloud Services */}
        <div className="flex justify-center space-x-2 mb-2">
          {services.map((service, index) => (
            <div key={`cloud-${index}`} className="flex flex-col items-center">
              <div className="border-l-2 border-dashed border-gray-400 h-3"></div>
              <div className="bg-purple-100 border-2 border-purple-500 rounded-lg px-1 py-0 text-[8px] text-center w-20 flex items-center justify-center">
                <Cloud className="h-2 w-2 mr-1" />
                <span>{service.cloudService}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Databases */}
        <div className="flex justify-center space-x-2 mb-2">
          {services.map((service, index) => (
            <div key={`db-${index}`} className="flex flex-col items-center">
              <div className="border-l-2 border-dashed border-gray-400 h-3"></div>
              <div className={`${service.dbColor} border-2 rounded-lg px-1 py-0 text-[8px] text-center w-20 flex items-center justify-center`}>
                <Database className="h-2 w-2 mr-1" />
                <span>{service.database}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Infrastructure */}
      <div className="border-t-2 border-gray-300 mt-2 pt-2">
        <div className="bg-gray-100 border-2 border-gray-500 rounded-lg px-2 py-1 text-center text-xs font-medium mb-2">
          AWS Cloud Infrastructure
        </div>
        
        <div className="flex justify-around text-[8px] text-center">
          <div>
            <div className="bg-blue-50 border border-blue-300 rounded p-1 mb-1">
              <span className="font-medium">Data Storage</span>
              <div className="text-[7px]">S3, RDS, DynamoDB</div>
            </div>
          </div>
          
          <div>
            <div className="bg-green-50 border border-green-300 rounded p-1 mb-1">
              <span className="font-medium">Compute</span>
              <div className="text-[7px]">EC2, Lambda, ECS</div>
            </div>
          </div>
          
          <div>
            <div className="bg-yellow-50 border border-yellow-300 rounded p-1 mb-1">
              <span className="font-medium">Monitoring</span>
              <div className="text-[7px]">CloudWatch, X-Ray</div>
            </div>
          </div>
          
          <div>
            <div className="bg-red-50 border border-red-300 rounded p-1 mb-1">
              <span className="font-medium">Security</span>
              <div className="text-[7px]">IAM, KMS, Shield</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Legend */}
      <div className="border border-gray-300 rounded-md p-1 bg-gray-50 mt-2 text-[8px]">
        <h3 className="font-semibold mb-1">Architecture Components</h3>
        <div className="grid grid-cols-3 gap-1">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-100 border border-green-500 rounded-sm mr-1"></div>
            <span>Frontend</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-100 border border-blue-500 rounded-sm mr-1"></div>
            <span>API Gateway</span>
          </div>
          <div className="flex items-center">
            <Server className="h-2 w-2 text-gray-500 mr-1" />
            <span>Microservices</span>
          </div>
          <div className="flex items-center">
            <Database className="h-2 w-2 text-gray-500 mr-1" />
            <span>Data Storage</span>
          </div>
          <div className="flex items-center">
            <Cloud className="h-2 w-2 text-purple-500 mr-1" />
            <span>Cloud Services</span>
          </div>
          <div className="flex items-center">
            <Lock className="h-2 w-2 text-orange-500 mr-1" />
            <span>Security</span>
          </div>
        </div>
      </div>
      
      {/* Brief description */}
      <div className="mt-1 text-[8px] text-gray-700">
        <p>Key architectural features:</p>
        <ul className="list-disc pl-3 space-y-0">
          <li>Microservices architecture ensures each service is autonomous</li>
          <li>API Gateway provides a unified entry point for all client requests</li>
          <li>Load balancer distributes traffic for horizontal scalability</li>
          <li>Security layer implements authentication and authorization</li>
          <li>AWS cloud services provide scalable infrastructure</li>
          <li>Each service has dedicated storage for domain isolation</li>
        </ul>
      </div>
    </div>
  );
};

export default MicroservicesArchitecture;
