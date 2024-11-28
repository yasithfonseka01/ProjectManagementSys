"use client";

import { useParams } from "next/navigation";
import React, { useState } from 'react';
import ProjectHeader from '@/app/projects/ProjectHeader';
import Board from "../BoardView";
import List  from "../ListView";
import Timeline from "../Timeline";
import Table from "../TableView";
import ModalNewProject from "@/app/projects/ModalNewProject";
import ModalNewTask from "@/components/ModalNewTask";


type Props = {
}

const Project = ({}: Props) => {
    const params = useParams();
    const id = Array.isArray(params?.id) ? params.id[0] : params?.id || ""; // Safely access id from params

    const [activeTab, setActiveTab] = useState("Board");
    const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  return (
    <div>
        <ModalNewTask
            isOpen={isModalNewTaskOpen}
            onClose={() => setIsModalNewTaskOpen(false)}
            id={id}
          />
        <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
          {activeTab === "Board" && (
            <Board id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
          )}

          {activeTab === "List" && (
            <List id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
          )}

          {activeTab === "Timeline" && (
            <Timeline id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
          )}

          {activeTab === "Table" && (
            <Table id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
          )}
      </div>
  );
};

export default Project;


