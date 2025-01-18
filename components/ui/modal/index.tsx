'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

type ModalProps = {
  title: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export function Modal(props: ModalProps) {
  const { title, open, onClose, children } = props;

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/25 dark:bg-white/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {/* Modal */}
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-md bg-neutral-50 p-6 text-left align-middle shadow-xl transition-all dark:bg-neutral-900">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6">
                  {title}
                </Dialog.Title>
                <div className="mt-2">{children}</div>
                <div className="mt-4">
                  <button
                    className={`w-full rounded-md border px-2 py-1 text-sm tracking-widest transition hover:opacity-75`}
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
