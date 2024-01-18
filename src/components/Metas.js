import React, { useState } from 'react';
import "../styles/Metas.css"


const Metas = () => {
    const [goal, setGoal] = useState('');
    const [completed, setCompleted] = useState(0);
    const [pending, setPending] = useState(0);
    const [goalsList, setGoalsList] = useState([]);

    const handleAddGoal = () => {
        const newGoal = { text: goal, completed: false };

        setGoalsList([...goalsList, newGoal]);
        setPending(pending + 1);
        setGoal('');
    };

    const handleDeleteGoal = (index) => {
        const updatedGoals = [...goalsList];
        updatedGoals.splice(index, 1);
        setGoalsList(updatedGoals);

        // Actualiza el contador de pendientes
        setPending((prevPending) => Math.max(0, prevPending - 1));
    };

    const handleCompleteGoal = (index) => {
        const updatedGoals = [...goalsList];
        updatedGoals[index].completed = !updatedGoals[index].completed;
        setGoalsList(updatedGoals);

        // Actualiza los contadores de completadas y pendientes
        setCompleted(updatedGoals.filter((goal) => goal.completed).length);
        setPending(updatedGoals.filter((goal) => !goal.completed).length);
    };

    return (
        <div className='cajaM'>
            <h1>Mis metas</h1>
            <div className='inputbotOn'>
                <input
                    type="text"
                    placeholder="Aprender CSS"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                />
                <button onClick={handleAddGoal}>
                    Agregar
                </button>
            </div>

            <div className='parrafos'>
                <div className='pr1'>
                    <p>Completadas: {completed}</p>
                </div>
                <div className='pr2'>
                    <p>Pendientes: {pending}</p>
                </div>
            </div>

            <div className='metasList'>

                {goalsList.map((goal, index) => (
                    <div key={index}>
                        <span>{goal.text}</span>

                        <button onClick={() => handleCompleteGoal(index)}>
                            Completar
                        </button>
                        <button onClick={() => handleDeleteGoal(index)}>
                            Eliminar
                        </button>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Metas;
