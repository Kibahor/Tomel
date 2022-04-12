export default {
    props: {
        
    },
    methods: {
		
    },
    template: `
        <div class="modal show" id="InsertModal" tabindex="-1" aria-labelledby="InsertModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <!-- Header Encart -->
                    <success-insert-header
                        >
                    </success-insert-header>

                    <!-- Body Encart -->
                    <success-insert-body
                        >
                    </success-insert-body>
                </div>
            </div>
        </div>
    `
}